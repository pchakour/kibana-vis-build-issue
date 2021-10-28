import { ExpressionsSetup } from 'src/plugins/expressions/public';
import { VisualizationsSetup } from 'src/plugins/visualizations/public';
import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface VisualizationIssuePluginSetup {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface VisualizationIssuePluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}

export interface AppPluginSetupDependencies {
  visualizations: VisualizationsSetup;
  expressions: ExpressionsSetup;
}
