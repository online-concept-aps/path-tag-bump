
import readFile from './read-file'

export default async function createCommit(tools) {
    const { main } = tools.getPackageJSON()

    if (!main) {
        throw new Error('Property "main" does not exist in your `package.json`.')
    }

    tools.log.info('Creating tree')
    const tree = await tools.github.git.createTree({
        ...tools.context.repo,
        tree: [
            {
                path: 'action.yml',
                mode: '100644',
                type: 'blob',
                content: await readFile(tools.workspace, 'action.yml')
            },
            {
                path: main,
                mode: '100644',
                type: 'blob',
                content: await readFile(tools.workspace, main)
            }
        ]
    })

    tools.log.complete('Tree created')

    tools.log.info('Creating commit')
    const commit = await tools.github.git.createCommit({
        ...tools.context.repo,
        message: 'Automatic compilation',
        tree: tree.data.sha,
        parents: [tools.context.sha]
    })
    tools.log.complete('Commit created')

    return commit.data
}