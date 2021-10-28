import { CoreSetup, CoreStart, Plugin } from '../../../src/core/public';
import {
  VisualizationIssuePluginSetup,
  VisualizationIssuePluginStart,
  AppPluginSetupDependencies,
} from './types';
import { visTypeDefinition } from './visualization_type';
import { getVisualizationConfig } from './visualization_fn';
import { getVisRenderer } from './visualization_renderer';

export class VisualizationIssuePlugin
  implements Plugin<VisualizationIssuePluginSetup, VisualizationIssuePluginStart> {
  public setup(
    core: CoreSetup,
    { visualizations, expressions }: AppPluginSetupDependencies
  ): VisualizationIssuePluginSetup {
    visualizations.createBaseVisualization(visTypeDefinition);
    expressions.registerFunction(() => getVisualizationConfig({}));
    expressions.registerRenderer(getVisRenderer({ core }));

    return {};
  }

  public start(_core: CoreStart): VisualizationIssuePluginStart {
    return {};
  }

  public stop() {}
}
