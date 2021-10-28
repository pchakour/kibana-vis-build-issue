import { buildExpression, buildExpressionFunction } from '../../../src/plugins/expressions/public';
import { Vis } from '../../../src/plugins/visualizations/public';
import { VisExpressionFunctionDefinition } from './visualization_fn';

export const toExpressionAst = (vis: Vis<{}>) => {
  const visualization = buildExpressionFunction<VisExpressionFunctionDefinition>(
    'visualization',
    {}
  );

  const ast = buildExpression([visualization]);
  return ast.toAst();
};
