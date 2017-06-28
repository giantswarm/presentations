# Running Containers <br/>and Exposing Services

## Session 1

---

<!-- .slide: class="right-image" -->
# Pods

- Smallest deployable units of computing
- Contain one or more containers
- Containers inside the pod
  - share namespaces
  - are scheduled together
- Emphemeral (won't be rescheduled)

![Pods](/layout/img/diagrams/Pods.png)

---

<!-- .slide: class="right-image" -->
# Labels & Selectors

- Labels
  - Key/value pairs that can be attached to objects
    - e.g. to pods, volumes, nodes, etc.
- Selectors
  - Select (group of) objects based on labels

![Labels](/layout/img/diagrams/Labels.png)

---

<!-- .slide: class="right-image" -->
# Deployments (& Replica Sets)

- Declarative way of deploying Pods
- Manages a Replica Set that in turn manages Pods
- Ensures that the desired number of Pods is running

![Deployments](/layout/img/diagrams/Deployments.png)

---

<!-- .slide: class="right-image" -->
# Services

- Abstraction layer on top of Pods
- Defines a logical set of Pods
- Defines a policy by which to access those
- Assigns them a single (virtual) service IP
- Takes care of simple load balancing
- Discovery via DNS

![Services](/layout/img/diagrams/Services.png)

---

<!-- .slide: class="right-image" -->
# Ingress

An Ingress is a collection of rules that allow inbound connections from outside the cluster to reach the cluster services.

![Services](/layout/img/diagrams/Ingress.png)