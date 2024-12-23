---
sidebar_position: 5
---

# 📈 Analysis

The **Analysis** tab provides detailed visualizations and metrics to help you understand your agents' performance and optimization journey.

> 💡 **Note**: At least one new agent must be generated before the Analysis page will be available.

## Key Components

The Analysis page features two powerful visualization tools:

### 1. 🌳 Experience Tree

![Experience Tree](img/analysis_page/tree.png)

A hierarchical visualization of your agent optimization journey:

- **Nodes**: Each circle represents a unique agent
- **Connections**: Lines show parent-child optimization relationships
- **Color Coding**:
  - Green: Improved agents
  - Red: Regressed agents
- **Interactive Features**:
  - Hover over nodes to view agent details
  - Zoom and pan to explore complex trees

### 2. 📊 Performance Score Chart

![Performance Score Chart](img/analysis_page/performance-graph.png)

A temporal view of agent performance:

- **X-axis**: Optimization rounds/iterations
- **Y-axis**: Performance score

### 3. 📋 Agent Run Information

![Agent Run Info](img/analysis_page/agent_run_info.gif)

Detailed information about each agent run step:

- **Timing Information**:

  - Start Time
  - End Time
  - Duration

- **Step Details**:
  - Step Name (e.g., ReviewAndRevise)
  - Input Arguments
  - Result/Response

Click on any row in the data table to view its complete run information in the details panel.

> 💡 **Tip**: Analyze the timing and responses for each step to identify performance bottlenecks and areas for improvement.

## Using the Analysis Tools

1. **Identify Patterns**: Use the Experience Tree to spot which optimization paths yield the best results
2. **Track Progress**: Monitor performance trends in the Score Chart
3. **Compare Agents**: Select multiple agents to analyze their relative performance

Look for branches in the Experience Tree that consistently show improvement to identify successful optimization strategies.

> 💡 **Next Step**: Use these insights to refine your prompts and settings for better agent performance
