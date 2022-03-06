import "reflect-metadata";
import { LocalModelSource, SEdgeSchema, SGraphSchema, TYPES } from "sprotty";
import "sprotty/css/sprotty.css";
import "./index.css";
import container from "./di.config";
import { TaskNodeSchema } from "./models";

const graph: SGraphSchema = {
  type: "graph",
  id: "root",
  children: [
    {
      type: "task",
      id: "task01",
      name: "First Task",
      status: "finished"
    } as TaskNodeSchema,
    {
      type: "task",
      id: "task02",
      name: "Second Task",
      status: "running"
    } as TaskNodeSchema,
    {
      type: "edge",
      id: "edge01",
      sourceId: "task01",
      targetId: "task02"
    } as SEdgeSchema
  ]
};

const modelSource = container.get<LocalModelSource>(TYPES.ModelSource);
modelSource.setModel(graph);
