# Kubernetes Overview

---

# What is Kubernetes

Kubernetes is a system for automating deployment, scaling, and management of containerized distributed applications.

<table class="centered no-borders">
  <thead>
  <tr>
  <th>![Scalable](/layout/img/scalable.png)</th>
  <th>![Blocks](/layout/img/blocks.png)</th>
  <th>![Suitcase](/layout/img/suitcase.png)</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Planet Scale</td>
    <td>Never Outgrow</td>
    <td>Run Anywhere</td>
  </tr>
  </tbody>
</table>

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
["Borg, Omega, and Kubernetes" March 2016](http://queue.acm.org/detail.cfm?id=2898444)<!-- .element: class="small block" -->

Coordination and consensus via Raft (etcd).
[In Search of an Understandable Consensus Algorithm](https://raft.github.io/raft.pdf)<!-- .element: class="small block" -->

---

<!-- .slide: class="centered" -->
# Kubernetes Architecture

![Kubernetes Architecture](/layout/img/diagrams/Architecture.png)<!-- .element: style="width: 80%; margin: auto" -->

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

Automatic binpacking
- Automatically places containers based on their resource requirements and other constraints. Mix critical and best-effort workloads in order to drive up utilization.

Self-healing
- Restarts containers that fail, replaces and reschedules containers when nodes die, kills containers that don't respond to your user-defined health check, and doesn't advertise them to clients until they are ready to serve.

---

# Kubernetes Features continued

Horizontal scaling
- Scale your application up and down with a simple command, with a UI, or automatically based on CPU usage.

Automated rollouts and rollbacks
- Kubernetes progressively rolls out changes to your application or its configuration, while monitoring application health to ensure it doesn't kill all your instances at the same time. If something goes wrong, Kubernetes will rollback the change for you.

---

# Kubernetes Features continued

Service discovery and load balancing
- No need to modify your application. Kubernetes gives containers their own IP addresses and a single DNS name for a set of containers, and can load-balance across them.

Secret and configuration management
- Deploy and update secrets and application configuration without rebuilding your image and without exposing secrets in your stack configuration.

---

# Kubernetes Features continued

Storage orchestration
- Automatically mount the storage system of your choice, whether from local storage, a public cloud provider such as GCP or AWS, or a network storage system such as NFS, iSCSI, Gluster, Ceph, Cinder, or Flocker.

Batch execution
- In addition to services, Kubernetes can manage your batch and CI workloads, replacing containers that fail, if desired.

---

# Community

![Kubernetes Community](/layout/img/community.png)

Note:
https://github.com/kubernetes/kubernetes

~1700 Contributors and growing
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