# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `servicename`

**Required** The name of the service to create tag for. Default ``.

## Outputs

### `new_tag`

The version number thats granted you.

## Example usage

```yaml
uses: online-concept-aps/path-tag-bump@v1.0.1
with:
  service-name: 'customer-service'
```