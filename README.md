# JUnit XML Parser Action

Parse test reports (for example junit.xml created by xcpretty). Simple wrapper of [junit2json](https://www.npmjs.com/package/junit2json).

## Inputs

### `path`

The junit file to parse.

### `content`

The junit string to parse.

### `fail-on-error`

Should cancel workflow if parsing fails. Defaults to **true**.

## Outputs

### `total-test-count`

The number of tests that were ran.

### `success-test-count`

The number of tests that succeeded.

### `failure-test-count`

The number of tests that failed.

### `parsed`

Boolean specifying if parsing succeeded.

### `json`

The fully parsed content as JSON.

## Example usage

```yaml
- name: Parse JUnit XML string
  id: junit-parser
  uses: justAnotherDev/junit-xml-parser-action@v1
  with:
    path: test_output/junit.xml

- run: echo "Failed Tests: ${{ steps.junit-parser.outputs.failure-test-count }}" 
```

More examples [here](https://github.com/justAnotherDev/junit-xml-parser-action/blob/master/.github/workflows/test.yml).