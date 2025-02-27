import { Folders } from "./folders";
import { FileNaming } from "./file-naming";
import { Tools } from "./tools";

type TargetPath = string;

export interface RuinConfig {
  enabledTools: Array<Tools>;
  patternFolders: Record<Folders, TargetPath>;
  fileNaming: FileNaming;
  basePath: TargetPath;
}
