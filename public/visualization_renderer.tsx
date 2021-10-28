import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import { ExpressionRenderDefinition } from 'src/plugins/expressions';
import { KibanaContextProvider } from '../../../src/plugins/kibana_react/public';
import { VisualizationContainer } from '../../../src/plugins/visualizations/public';

export const getVisRenderer: (deps: {}) => ExpressionRenderDefinition<{}> = (deps) => ({
  name: 'visualization',
  displayName: 'Visualization issue',
  reuseDomNode: true,
  render: async (domNode, {}, handlers) => {
    handlers.onDestroy(() => {
      unmountComponentAtNode(domNode);
    });

    const showNoResult = false;

    render(
      <VisualizationContainer handlers={handlers} showNoResult={showNoResult}>
        <KibanaContextProvider services={{ ...deps }}>
          <div>HELLO WORLD :-)</div>
        </KibanaContextProvider>
      </VisualizationContainer>,
      domNode
    );
  },
});
