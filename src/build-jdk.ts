import * as core from '@actions/core'
import * as builder from './builder'

async function run(): Promise<void> {
  try {
    const javaToBuild = core.getInput('javaToBuild', {required: false})
    const impl = core.getInput('impl', {required: false})
    const dcevm_branch = core.getInput('dcevm_branch', {required: true})
    const dcevm_tag = core.getInput('dcevm_tag', {required: true})
    const usePRRef = core.getInput('usePRRef') === 'true'
    await builder.buildJDK(javaToBuild, impl, dcevm_branch, dcevm_tag, usePRRef)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
