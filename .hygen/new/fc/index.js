const categories = {
  atoms: "atoms",
  molecules: "molecules",
  organisms: "organisms",
  none: "無し(/components直下) - none (directly under /components)",
};

module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: "select",
        name: "category",
        message: "カテゴリはどれ？ - Which category?",
        choices: Object.keys(categories),
      },
      {
        type: "input",
        name: "dir",
        message:
          "サブカテゴリは何？（ex: auth, ※空文字ならカテゴリ直下） - What's the subcategory? (e.g.: auth, ※if it's an empty string, then it's directly under the category)",
      },
      {
        type: "input",
        name: "component_name",
        message:
          "コンポーネント名は何？（ex: AuthLoginForm） - What's the component name? (e.g.: AuthLoginForm)",
      },
      {
        type: "confirm",
        name: "have_props",
        message: "引数は必要？ - Do you need any arguments(props)?",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { category, component_name, dir, have_props } = answers;

      const sub_dir_path = `${dir ? `${dir}/` : ``}${component_name}`;
      const path = category !== "none" ? `${category}/${sub_dir_path}` : sub_dir_path;
      const abs_path = `src/components/${path}`;

      // props
      const props_name = have_props ? `${component_name}Props` : "";
      const props = have_props ? `{}: ${props_name}` : "";

      return {
        ...answers,
        path,
        abs_path,
        props_name,
        props,
      };
    });
  },
};
