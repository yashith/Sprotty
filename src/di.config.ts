import { Container, ContainerModule } from "inversify";
import {
  configureModelElement,
  loadDefaultModules,
  LocalModelSource,
  PolylineEdgeView,
  SEdge,
  SGraph,
  SGraphFactory,
  SGraphView,
  TYPES
} from "sprotty";
import { TaskNode } from "./models";
import { TaskNodeView } from "./views";

const flowModule = new ContainerModule((bind, unbind, isBound, rebind) => {
  bind(TYPES.ModelSource)
    .to(LocalModelSource)
    .inSingletonScope();
  rebind(TYPES.IModelFactory)
    .to(SGraphFactory)
    .inSingletonScope();
  const context = { bind, unbind, isBound, rebind };
  configureModelElement(context, "graph", SGraph, SGraphView);
  configureModelElement(context, "task", TaskNode, TaskNodeView);
  configureModelElement(context, "edge", SEdge, PolylineEdgeView);
});

const container = new Container();
loadDefaultModules(container);
container.load(flowModule);
export default container;
