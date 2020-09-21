const core = require('@actions/core');
const junit2json = require("junit2json");
const fs = require('fs');

const parse = async () => {
	try {
		const content = core.getInput('content') || fs.readFileSync(core.getInput('path'), 'utf8');
		const output = await junit2json.parse(content);
		core.setOutput('failure-test-count', output.failures);
		core.setOutput('total-test-count', output.tests);
		core.setOutput('success-test-count', output.tests-output.failures);
		core.setOutput('json', output);
		core.setOutput('parsed', true);
	} catch(error) {
		core.setOutput('parsed', false);
		if (core.getInput('fail-on-error') == "true") {
			core.setFailed(error);
		} else {
			core.warning("Parsing Failed: ");
			core.info(error);
		}
	}
}

parse();
