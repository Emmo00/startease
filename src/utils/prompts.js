import inquirer from 'inquirer';

async function promptProjectName() {
  const ans = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter project name:'
    }
  ]);

  return ans.projectName;
}

async function promptProjectStack() {
  const ans = await inquirer.prompt([
    {
      type: 'list',
      name: 'projectStack',
      message: 'Choose your stack:',
      choices: ['Frontend', 'Backend']
    }
  ]);

  return ans.projectStack.toLowerCase();
}

async function promptFrontendFramework() {
  const ans = await inquirer.prompt([
    {
      type: 'list',
      name: 'framework',
      message: 'Choose a framework:',
      choices: ['ReactJs']
    }
  ]);

  return ans.framework.toLowerCase().replace(/ /g, '-');
}

async function promptBackendFramework() {
  const ans = await inquirer.prompt([
    {
      type: 'list',
      name: 'framework',
      message: 'Choose a framework:',
      choices: ['NestJS', 'ExpressJs']
    }
  ]);

  return ans.framework.toLowerCase().replace(/ /g, '-');
}

async function promptDatabase() {
  const ans = await inquirer.prompt([
    {
      type: 'list',
      name: 'database',
      message: 'select a database',
      choices: ['MongoDB', 'PostgreSQL', 'MySQL']
    }
  ]);

  return ans.database.toLowerCase();
}

async function promptInitDatabase() {
  const ans = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'initDB',
      message: 'Initialize Database?',
      default: false
    }
  ]);

  return ans.initDB;
}

async function getInitGit() {
  const ans = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'initGitRepo',
      message: 'Initialize a Git repository?',
      default: false
    }
  ]);

  return ans.initGitRepo;
}

async function promptProjectType() {
  const ans = await inquirer.prompt([
    {
      type: 'list',
      name: 'projectComplexity',
      description: 'this is a test desc',
      message: 'select project complexity',
      choices: ['basic', 'advanced']
    }
  ]);

  return ans.projectComplexity;
}

async function promptOrm(database) {
  database = database?.toLowerCase() ?? '';
  console.log('--database', database);
  let ormChoices = [];

  if (database === 'mongodb') {
    ormChoices = ['Mongoose'];
  } else {
    ormChoices = ['Typeorm'];
  }

  const ans = await inquirer.prompt([
    {
      type: 'list',
      name: 'database',
      message: 'select your preferred ORM',
      choices: ormChoices
    }
  ]);

  return ans.database.toLowerCase();
}