<!-- .slide: class="centered" -->
<!-- .slide: data-background-image="/layout/img/bg/1.png" -->

# Running Kubernetes in Kubernetes

by Timo Derstappen

![Giant Swarm](/layout/img/giantswarm.png) <!-- .element: style="width: 100px; margin-right: 50px" -->
![Kubernetes](/layout/img/kubernetes.png) <!-- .element: style="width: 90px; position: relative; top: -10px" -->

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Overview

1. **Background / Motivation**
2. Architecture
3. Operators
4. Demo
5. Outlook

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Background

We manage Kubernetes clusters for customers 24/7.

Both on-premises and in the cloud.

---

<!-- .slide: data-background-image="/layout/img/kaas.jpg" -->
# Kubernetes as a Service (KaaS)

* DC in Frankfurt, Germany
* Full access to clusters

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# On-premises KaaS

Most of the time we run multiple clusters at our customer datacenter as well.

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Why not RBAC, NetworkPolicies etc?

"Soft" multi-tenancy not enough in enterprise context

* Different service classifications
* Different environments: separation of dev, test, prod
* Test tooling on new K8s versions

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

> People must come to things in their own time, in their own way, for their own reasons, or they never truly come at all. - Dee Hock<!-- .element style="padding: 40px;" -->


---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# RBAC, NetworkPolicies FTW

We encourage to use these features and help with integration.

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

Rather obvious. If you provide others with Kubernetes you would like to use the same concepts within your product as well.

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Definition

G8s: Giantnetes

K8s: Kubernetes == Guest cluster

---

![Cluster](/layout/img/cubaneddies4.jpg)

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Overview

1. Background / Motivation
2. **Architecture**
3. Operators
4. Demo
5. Outlook

---

![Cluster](/layout/img/g8s_users.png)  <!-- .element width="100%" -->

---

![Cluster](/layout/img/g8s_full.png)  <!-- .element width="100%" -->

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Networking

* One Flannel server per host
* One Flannel client per host per cluster
* Flannel VXLAN backend

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/g8s_networking.png) <!-- .element: style="height: 90%;" -->

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# VMs

* Docker container with QEMU tooling
* CoreOS started in a KVM
* Parameterized via CloudConfig
* Certs are handed to the VMs via a volume

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Master

* Ingress in G8s for the API
* KubeDNS
* Calico Policy Controller

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Nodes

* Ingress NGINX Controller running on a specific port on some of the nodes
* Loadbalancer checks if the ingress controller is listening and sends traffic to it

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Certificates

* Each cluster has its own root ca
* Using PKI backend in Vault
* Each service of a cluster has a role in Vault

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Iterations of the platform

1. K8s clusters via systemd units over fleet
1. K8s manifests to create K8s clusters used as templates
1. Writing operators

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Overview

1. Background / Motivation
2. Architecture
3. **Operators**
4. Demo
5. Outlook

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Operators

Codify all operational tasks

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Third-Party Resources

Easily extend the Kubernetes API

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# KVM operator

Create k8s clusters on bare-metal via KVM based on a TPR

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# AWS operator

Create k8s clusters on AWS based on a TPR

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/operators_and_certs_1.png) <!-- .element: style="width: 80%;" -->

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/operators_and_certs_2.png) <!-- .element: style="width: 80%;" -->

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/operators_and_certs_3.png) <!-- .element: style="width: 80%;" -->

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/operators_and_certs_4.png) <!-- .element: style="width: 80%;" -->

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/operators_and_certs_5.png) <!-- .element: style="width: 80%;" -->

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# The Cluster TPR defines

* Kubernetes configuration/version
* Ingress configuration/version
* Flannel configuration
* Master/Node configurations

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# The CA TPR defines

* TTL
* Defines roles attached to certificates
* Allowed Domains
* Cluster it belongs to

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# The Cert TPR defines

* TTL
* Common Name
* SANs

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Overview

1. Background / Motivation
2. Architecture
3. Operators
4. **Demo**
5. Outlook

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Overview

1. Background / Motivation
2. Architecture
3. Operators
4. Demo
5. **Outlook**

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Micro Operators

* Operators should have single responsibilities.
* Keep them simple and maintainable

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Operatorkit

Our services are based upon microkit. We would like to reduce boilerplate in our operators and collect them in a library called operatorkit.

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Self-hosted

Having Giantnetes and all guest clusters running self-hosted will further ease the lifecycle management of the clusters.

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Thank you.

Timo Derstappen

@teemow
