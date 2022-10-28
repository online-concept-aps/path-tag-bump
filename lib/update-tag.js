export default async function updateTag(
    tools,
    sha,
    tagName
) {
    const ref = `tags/${tagName}`

    tools.log.info(`Updating ${ref}`)
    return tools.github.git.updateRef({
        ...tools.context.repo,
        ref,
        force: true,
        sha
    })
}