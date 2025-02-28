export interface DefaultPackageJson<
  ScriptsType = Record<string, string>,
  DevDependenciesType = Record<string, string>,
  DependenciesType = Record<string, string>
> {
  name: string;
  version: string;
  description: string;
  main: string;
  type: "module";
  scripts: ScriptsType;
  keywords: Array<string>;
  author: string;
  license: string;
  packageManager: string;
  devDependencies: DevDependenciesType;
  dependencies: DependenciesType;
}
