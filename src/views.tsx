/** @jsx svg */
import { svg } from "snabbdom-jsx";
import { VNode } from "snabbdom/vnode";
import { injectable } from "inversify";
import { IView } from "sprotty";
import { TaskNode } from "./models";

@injectable()
export class TaskNodeView implements IView {
  render(node: Readonly<TaskNode>): VNode {
    const radius = 20;
    return (
      <g>
        <circle
          class-sprotty-node={true}
          class-task={true}
          class-running={node.status === "running"}
          class-finished={node.status === "finished"}
          r={radius}
          cx={radius}
          cy={radius}
        />
        <text x={radius} y={radius + 5}>
          {node.name}
        </text>
      </g>
    );
  }
}
