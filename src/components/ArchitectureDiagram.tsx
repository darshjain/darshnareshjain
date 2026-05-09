"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ArchNode {
  id: string;
  label: string;
  type: string;
  col: number;
  row: number;
  sublabel?: string;
}

export interface ArchConnection {
  from: string;
  to: string;
  label?: string;
}

interface ArchitectureDiagramProps {
  cols: number;
  rows: number;
  nodes: ArchNode[];
  connections: ArchConnection[];
  className?: string;
}

const typeStyles: Record<string, string> = {
  frontend: "bg-sky-500/10 border-sky-500/60 text-sky-700 dark:text-sky-300",
  backend: "bg-indigo-500/10 border-indigo-500/60 text-indigo-700 dark:text-indigo-300",
  database: "bg-emerald-500/10 border-emerald-500/60 text-emerald-700 dark:text-emerald-300",
  ai: "bg-purple-500/10 border-purple-500/60 text-purple-700 dark:text-purple-300",
  external: "bg-orange-500/10 border-orange-500/60 text-orange-700 dark:text-orange-300",
  entry: "bg-orange-500/10 border-orange-500/60 text-orange-700 dark:text-orange-300",
  queue: "bg-amber-500/10 border-amber-500/60 text-amber-700 dark:text-amber-300",
  "compute-cluster": "bg-violet-500/10 border-violet-500/60 text-violet-700 dark:text-violet-300",
  storage: "bg-emerald-500/10 border-emerald-500/60 text-emerald-700 dark:text-emerald-300",
  training: "bg-fuchsia-500/10 border-fuchsia-500/60 text-fuchsia-700 dark:text-fuchsia-300",
  registry: "bg-cyan-500/10 border-cyan-500/60 text-cyan-700 dark:text-cyan-300",
  gateway: "bg-sky-500/10 border-sky-500/60 text-sky-700 dark:text-sky-300",
  "worker-pool": "bg-indigo-500/10 border-indigo-500/60 text-indigo-700 dark:text-indigo-300",
  cache: "bg-amber-500/10 border-amber-500/60 text-amber-700 dark:text-amber-300",
  "external-cluster": "bg-orange-500/10 border-orange-500/60 text-orange-700 dark:text-orange-300",
  stream: "bg-amber-500/10 border-amber-500/60 text-amber-700 dark:text-amber-300",
  "backend-cluster": "bg-indigo-500/10 border-indigo-500/60 text-indigo-700 dark:text-indigo-300",
  network: "bg-sky-500/10 border-sky-500/60 text-sky-700 dark:text-sky-300",
  hardware: "bg-neutral-500/10 border-neutral-500/60 text-neutral-700 dark:text-neutral-300",
  "frontend-compute": "bg-sky-500/10 border-sky-500/60 text-sky-700 dark:text-sky-300",
  "blockchain-core": "bg-amber-500/10 border-amber-500/60 text-amber-700 dark:text-amber-300",
  indexer: "bg-indigo-500/10 border-indigo-500/60 text-indigo-700 dark:text-indigo-300",
  "storage-cluster": "bg-emerald-500/10 border-emerald-500/60 text-emerald-700 dark:text-emerald-300",
  worker: "bg-indigo-500/10 border-indigo-500/60 text-indigo-700 dark:text-indigo-300",
};

const NODE_W = 168;
const NODE_H = 64;
const COL_GAP = 56;
const ROW_GAP = 80;
const PADDING_X = 40;
const PADDING_Y = 56;

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  cols,
  rows,
  nodes,
  connections,
  className,
}) => {
  const width = PADDING_X * 2 + cols * NODE_W + (cols - 1) * COL_GAP;
  const height = PADDING_Y * 2 + rows * NODE_H + (rows - 1) * ROW_GAP;

  const nodeCenter = (n: ArchNode) => ({
    cx: PADDING_X + n.col * (NODE_W + COL_GAP) + NODE_W / 2,
    cy: PADDING_Y + n.row * (NODE_H + ROW_GAP) + NODE_H / 2,
  });

  const edgeAnchor = (
    from: ArchNode,
    to: ArchNode
  ): { x1: number; y1: number; x2: number; y2: number } => {
    const a = nodeCenter(from);
    const b = nodeCenter(to);

    const sameRow = from.row === to.row;
    const sameCol = from.col === to.col;

    if (sameRow) {
      const dir = b.cx > a.cx ? 1 : -1;
      return {
        x1: a.cx + dir * (NODE_W / 2),
        y1: a.cy,
        x2: b.cx - dir * (NODE_W / 2),
        y2: b.cy,
      };
    }
    if (sameCol) {
      const dir = b.cy > a.cy ? 1 : -1;
      return {
        x1: a.cx,
        y1: a.cy + dir * (NODE_H / 2),
        x2: b.cx,
        y2: b.cy - dir * (NODE_H / 2),
      };
    }
    const dirX = b.cx > a.cx ? 1 : -1;
    const dirY = b.cy > a.cy ? 1 : -1;
    return {
      x1: a.cx + dirX * (NODE_W / 2),
      y1: a.cy,
      x2: b.cx,
      y2: b.cy - dirY * (NODE_H / 2),
    };
  };

  const buildPath = (
    p: { x1: number; y1: number; x2: number; y2: number }
  ) => {
    const dx = p.x2 - p.x1;
    const dy = p.y2 - p.y1;
    if (Math.abs(dy) < 1) {
      return `M ${p.x1} ${p.y1} L ${p.x2} ${p.y2}`;
    }
    if (Math.abs(dx) < 1) {
      return `M ${p.x1} ${p.y1} L ${p.x2} ${p.y2}`;
    }
    const cx1 = p.x1 + dx * 0.5;
    const cy1 = p.y1;
    const cx2 = p.x2 - dx * 0.5;
    const cy2 = p.y2;
    return `M ${p.x1} ${p.y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${p.x2} ${p.y2}`;
  };

  return (
    <div
      className={cn(
        "relative w-full glass rounded-3xl overflow-x-auto overflow-y-hidden",
        className
      )}
    >
      <div
        className="relative mx-auto"
        style={{ width: `${width}px`, height: `${height}px`, minWidth: `${width}px` }}
      >
        <svg
          className="absolute inset-0 pointer-events-none"
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="8"
              refY="5"
              orient="auto"
              markerUnits="userSpaceOnUse"
            >
              <path
                d="M0,0 L10,5 L0,10 z"
                fill="currentColor"
                className="text-neutral-400 dark:text-zinc-500"
              />
            </marker>
          </defs>
          {connections.map((conn, idx) => {
            const fromNode = nodes.find((n) => n.id === conn.from);
            const toNode = nodes.find((n) => n.id === conn.to);
            if (!fromNode || !toNode) return null;
            const anchor = edgeAnchor(fromNode, toNode);
            const path = buildPath(anchor);
            return (
              <motion.path
                key={`${conn.from}-${conn.to}-${idx}`}
                d={path}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.3 + idx * 0.08 }}
                stroke="currentColor"
                strokeWidth={1.75}
                fill="none"
                markerEnd="url(#arrowhead)"
                className="text-neutral-400 dark:text-zinc-500"
              />
            );
          })}
        </svg>

        {connections.map((conn, idx) => {
          const fromNode = nodes.find((n) => n.id === conn.from);
          const toNode = nodes.find((n) => n.id === conn.to);
          if (!fromNode || !toNode || !conn.label) return null;
          const a = nodeCenter(fromNode);
          const b = nodeCenter(toNode);
          const midX = (a.cx + b.cx) / 2;
          const midY = (a.cy + b.cy) / 2;
          return (
            <motion.div
              key={`label-${conn.from}-${conn.to}-${idx}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + idx * 0.08 }}
              className="absolute text-[10px] leading-none font-semibold px-2 py-1 rounded-md backdrop-blur-md bg-white/85 dark:bg-zinc-950/85 text-neutral-600 dark:text-neutral-300 border border-neutral-200/70 dark:border-zinc-800/70 whitespace-nowrap z-10 shadow-sm"
              style={{
                left: `${midX}px`,
                top: `${midY}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {conn.label}
            </motion.div>
          );
        })}

        {nodes.map((node, idx) => {
          const { cx, cy } = nodeCenter(node);
          return (
            <motion.div
              key={node.id}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 22,
                delay: idx * 0.06,
              }}
              style={{
                left: `${cx - NODE_W / 2}px`,
                top: `${cy - NODE_H / 2}px`,
                width: `${NODE_W}px`,
                height: `${NODE_H}px`,
              }}
              className={cn(
                "absolute flex flex-col items-center justify-center text-center px-3 rounded-xl border backdrop-blur-md bg-white/85 dark:bg-zinc-950/80 shadow-sm z-20",
                typeStyles[node.type] ||
                  "bg-neutral-500/10 border-neutral-500/60 text-neutral-700 dark:text-neutral-300"
              )}
            >
              <span className="text-[11px] font-bold leading-tight tracking-tight">
                {node.label}
              </span>
              {node.sublabel && (
                <span className="mt-0.5 text-[9px] uppercase tracking-widest opacity-70">
                  {node.sublabel}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="sticky bottom-0 left-0 right-0 px-6 py-3 flex items-center justify-between border-t border-neutral-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
            System Architecture
          </span>
        </div>
        <span className="text-[10px] text-neutral-400 dark:text-zinc-500 hidden sm:block">
          Scroll horizontally if needed
        </span>
      </div>
    </div>
  );
};
