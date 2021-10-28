import { ExpressionFunctionDefinition, Render } from 'src/plugins/expressions/public';
import { KibanaContext } from 'src/plugins/data/public';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface VisualizationRenderValue {}

type Input = KibanaContext | null;
type Output = Promise<Render<VisualizationRenderValue>>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface VisParamsExp {}

export type VisExpressionFunctionDefinition = ExpressionFunctionDefinition<
  'visualization',
  Input,
  VisParamsExp,
  Output
>;

export const getVisualizationConfig = (_dependencies: {}): VisExpressionFunctionDefinition => ({
  name: 'visualization',
  type: 'render',
  inputTypes: ['kibana_context', 'null'],
  help: 'Vis',
  args: {},
  async fn(_input, _args) {
    return {
      type: 'render',
      as: 'visualization',
      value: {},
    };
  },
});
