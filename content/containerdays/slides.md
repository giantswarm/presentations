<!-- .slide: class="centered" -->
<!-- .slide: data-background-image="/layout/img/bg/1.png" -->

# Automating Kubernetes Cluster Operations with Operators

by Timo Derstappen

![Giant Swarm](/layout/img/giantswarm.png) <!-- .element: style="width: 100px; margin-right: 50px" -->
![Kubernetes](/layout/img/kubernetes.png) <!-- .element: style="width: 90px; position: relative; top: -10px" -->

---

<!-- .slide: class="centered" -->
<!-- .slide: data-background-image="/layout/img/bg/1.png" -->

# Running Kubernetes in Kubernetes

![Kubernetes](/layout/img/kubernetes.png) <!-- .element: style="width: 90px;  margin-right: 50px; position: relative; top: -10px" -->
![Kubernetes](/layout/img/kubernetes.png) <!-- .element: style="width: 90px; position: relative; top: -10px" -->

---

<!-- .slide: class="centered" -->
<!-- .slide: data-background-image="/layout/img/palms.jpg" -->

# Are you in desired state?

![Kubernetes](/layout/img/kubernetes.png) <!-- .element: style="width: 90px; position: relative; top: -10px" -->

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Overview

1. **Background / Motivation**
2. Architecture
3. Operators
4. Outlook

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Background

At Giant Swarm we manage Kubernetes clusters for customers 24/7. 

Both on bare metal and in the cloud.

---

<!-- .slide: data-background-image="/layout/img/bg/3.png" -->
# Distributed Team

* People are in 6 different european countries
* Looking for more platform engineers and SREs

---

<!-- .slide: data-background-image="/layout/img/kaas.jpg" -->
# Kubernetes as a Service (KaaS)

* Own DC in Frankfurt, Germany
* Full access to clusters

---

<!-- .slide: data-background-image="/layout/img/bread_wheat.jpg" -->

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# On-premises KaaS

Current focus is to manage Kubernetes in the DCs or AWS accounts of the customers itself.

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Open Source

Our tooling is open-source and we are working with the community to improve kubernetes operations.

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Multiple Clusters

"Soft" multi-tenancy not enough in enterprise context

* PCI-compliance, privacy laws, etc.
* Different environments: separation of dev, test, prod
* Test new K8s versions

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

> People must come to things in their own time, in their own way, for their own reasons, or they never truly come at all. - Dee Hock<!-- .element style="padding: 40px;" -->


---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# RBAC, NetworkPolicies FTW

We encourage to use the features and integrate.

* Small clusters make little sense
* Support while processes need to be adapted
* Kubernetes matures - trust over time

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
## Introducing: 

# Giantnetes

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Motivation

Rather obvious. If you provide others with Kubernetes because you think the building blocks are right, you just have to use it too.

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Definition

G8s: Giantnetes

K8s: Kubernetes == Guest cluster

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Overview

1. Background / Motivation
2. **Architecture**
3. Operators
4. Outlook

---

![Cluster](/layout/img/g8s_users.png)  <!-- .element style="background-color: white;" -->

---

![Cluster](/layout/img/g8s_full.png)  <!-- .element width="100%" style="background-color: white;" -->

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Immutability

* Container linux (Hosts and Guests)
* Continuous pipeline (Container build, registry, kubernetes)

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Reproducable builds and deployments at any point in time

* Architect (https://github.com/giantswarm/architect)
* Draughtsman (https://github.com/giantswarm/draughtsman)

---

<!-- .slide: class="centered" -->
<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Every manual change is ephemeral

---

<!-- .slide: class="centered" -->
<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Mean time to recovery!

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Networking

* Flannel/VPC network between guest cluster nodes
* Calico between containers
* Network policy controller

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/diagrams/networking/1.png)

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/diagrams/networking/2.png)

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/diagrams/networking/3.png)

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/diagrams/networking/4.png)

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Certificates

* Each cluster has its own root ca
* Using PKI backends in Vault
* Certificates are rotated every day

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Certificates #2

* Kubernetes components use mutual TLS
* Client certificates are used for RBAC

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Overview

1. Background / Motivation
2. Architecture
3. **Operators**
4. Outlook

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Why are we doing this again?

* Fully automate deployment of kubernetes
* Continuously manage desired state of the clusters

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Iterations of the platform

1. K8s clusters via systemd units over fleet
1. K8s manifests to create K8s clusters used as templates
1. Writing operators

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Operators

* Codify all operational tasks
* Manage desired state

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# ~~Third-Party Resources~~
# Custom Resource Definitions

Easily extend the Kubernetes API

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Operate all the things

* aws-operator
* kvm-operator
* cert-operator
* flannel-operator
* ingress-operator

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# AWS operator

Create k8s clusters on AWS based on a TPR

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/diagrams/operators_and_certs/1.png) <!-- .element: style="width: 80%;" -->

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/diagrams/operators_and_certs/2.png) <!-- .element: style="width: 80%;" -->

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/diagrams/operators_and_certs/3.png) <!-- .element: style="width: 80%;" -->

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/diagrams/operators_and_certs/4.png) <!-- .element: style="width: 80%;" -->

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/diagrams/operators_and_certs/5.png) <!-- .element: style="width: 80%;" -->

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/diagrams/operators_and_certs/6.png) <!-- .element: style="width: 80%;" -->

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# The TPRs define

* Kubernetes configuration/version
* Ingress configuration/version
* Network configuration
* Master/Node configurations
* Certificates

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# The Cert TPR defines

* TTL
* Common Name
* SANs
* Cluster / Component

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Overview

1. Background / Motivation
2. Architecture
3. Operators
4. **Outlook**

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Micro Operators 

* Operators should have single responsibilities. 
* Keep them simple and maintainable

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Operatorkit

Our services are based upon microkit. We've also created operatorkit to reduce boilerplate in our operators and collect them in a library.

https://github.com/giantswarm/operatorkit

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Self-hosted

* First step Having Giantnetes and all guest clusters running self-hosted will further ease the lifecycle management of the clusters.

---

<!-- .slide: data-background-image="/layout/img/hiring.gif" data-background-size="auto 100%" data-background-color="black" -->

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Thank you.

Timo Derstappen

CTO of Giant Swarm
@teemow
