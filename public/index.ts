import './index.scss';

import { VisualizationIssuePlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin() {
  return new VisualizationIssuePlugin();
}
export { VisualizationIssuePluginSetup, VisualizationIssuePluginStart } from './types';
