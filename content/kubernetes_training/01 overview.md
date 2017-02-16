layout: true
class: giantswarm, blue
<div class="header"><img src="../img/giantswarm.png" style="height: 50px;"/></div>
<div class="footer"><span>Running Containers and Exposing Services I &copy; CC Attribution-ShareAlike 3.0</span></div>

---

class: center, middle, giantswarm, blue

# Kubernetes Overview

---

# What is Kubernetes

Kubernetes is a platform for managing containerized distributed applications based on the microservices architecture.

![Scalable](../img/scalable.png) | ![Blocks](../img/blocks.png) | ![Suitcase](../img/suitcase.png)
------------- | ------------- | -------------
Planet Scale | Never Outgrow | Run Anywhere

---

# Core Ideas of Microservices Architectures

- Decoupled Services
- Lightweight Communication
- Built around business capabilities
- Independently changeable and deployable
- Polyglot
- Resilience
  - Immutable Artifacts
  - Designed To Fail
  - Elastic in Scale

---

# Microservices are Designed To Fail

Availabiliy = MTBF / (MTBF + MTTR)

Focus on minimizing MTTR instead of MTBF

---

# Kubernetes History

Based on 15 years of experience of running production workloads at Google.
["Borg, Omega, and Kubernetes" March 2016](http://queue.acm.org/detail.cfm?id=2898444)

Coordination and consensus via Paxos (etcd).
["Consensus in the Cloud: Paxos Systems Demystified" February 2016](https://www.cse.buffalo.edu/tech-reports/2016-02.pdf)

---

class: white

# Kubernetes Architecture

.center[.big-pic[![Kubernetes Architecture](../img/architecture.png)]]

---

# Core Principles

Portable
- public, private, hybrid, multi-cloud

Extensible
- modular, pluggable, hookable, composable

Self-healing
- auto-placement, auto-restart, auto-replication, auto-scaling

---

# Kubernetes Features

- co-locating helper processes, facilitating composite applications and preserving the one-application-per-container model,
- mounting storage systems,
- distributing secrets,
- application health checking,
- replicating application instances,
- horizontal auto-scaling,

---

# Kubernetes Features continued

- naming and discovery,
- load balancing,
- rolling updates,
- resource monitoring,
- log access and ingestion,
- support for introspection and debugging, and
- identity and authorization.

---

class: white

# Community

.center[.big-pic[![Kubernetes Community](../img/community.png)]]

???

https://github.com/kubernetes/kubernetes

~900 Contributors and growing
from Google, Red Hat, Microsoft, CoreOS, Mesosphere, and many more

Companies using
ebay, box, Goldman Sachs, OpenAI, and many more

Release Cycle: about every [three months](https://github.com/kubernetes/features/blob/master/release-1.5/release-1.5.md)

---

# Why Kubernetes

- Mature Platform
  - 15 years of experience at Google
  - Best-of-breed ideas and practices from the community
- Vibrant and active community that is inclusive
- Primitives instead of Frameworks
- Low lock-in to single technologies
  - Through abstraction of container engine, networking, storage