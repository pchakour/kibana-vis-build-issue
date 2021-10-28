import { VisGroups, VisTypeDefinition } from '../../../src/plugins/visualizations/public';
import { DataEditorParams } from './components/data_editor_params';
import { toExpressionAst } from './to_ast';
import { VisParamsExp } from './visualization_fn';

export const VIS_NAME = 'visualization';

export const visTypeDefinition: VisTypeDefinition<VisParamsExp> = {
  name: VIS_NAME,
  title: 'Visualization',
  description: 'Visualization to illustrate issue',
  icon: 'visualizeApp',
  group: VisGroups.PROMOTED,
  toExpressionAst,
  visConfig: {
    defaults: {},
  },
  editorConfig: {
    optionTabs: [
      {
        name: 'visDataOptions',
        title: 'Data',
        editor: DataEditorParams,
      },
    ],
  },
};
