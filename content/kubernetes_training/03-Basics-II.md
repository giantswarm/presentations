# Basic Concepts in Kubernetes II

---

# Namespaces

- Also called "virtual clusters"
- No real isolation by default
- Just separation
- Good for keeping order
- Good for separating environments
- First building block of in-cluster isolation

---

# Node Selectors

- Select a (group of) specific node(s) for pods to be scheduled
- Selection based on Node labels
- Nodes can be labeled based on
  - features
  - environments
  - tiers
  - etc.

---

# Config Maps

- Help keeping configuration out of your images and pods
- Hold configuration in form of
  - configuration files
  - environment variables
  - command line arguments
- Can inject said configuration into pods

---

# Secrets

- Similar to Config Maps
- Hold sensitive information like
  - passwords
  - keys
  - tokens
- Special type: `imagePullSecrets`
- Are held in `tmpfs` and only on nodes that need them
- Should enable encryption at rest

---

# Daemon Sets

- Ensures an instance of a pod is running on all nodes
- Is meant for running daemons like
  - cluster storage daemons (e.g. Quobyte, glusterd, ceph, etc.)
  - log collectors (e.g. fluentd or logstash)
  - monitoring daemons (e.g. Prometheus Node Exporter, collectd, New Relic agent, etc.)
- Can also use Node Selectors

---

# Jobs

- There are three kinds of Jobs:
  - Non-parallel jobs
  - Parallel jobs with a fixed completion count
  - Parallel jobs with a work queue

---

# Cron Jobs

- Like Jobs but scheduled
- Two types:
  - Once at a specified point in time
  - Repeatedly at a specified point in time
- Think good old Cron (format is identical)