<!-- .slide: class="centered" -->
<!-- .slide: data-background-image="/layout/img/bg/1.png" -->

# Running Kubernetes in Kubernetes

by Timo Derstappen

![Giant Swarm](/layout/img/giantswarm.png) <!-- .element: style="width: 100px; margin-right: 50px" -->
![Kubernetes](/layout/img/kubernetes.png) <!-- .element: style="width: 90px; position: relative; top: -10px" -->

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Overview

1. *Background / Motivation*
2. Architecture
3. Implementation details
4. Demo
5. Outlook

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Background

We manage Kubernetes clusters for customers 24/7.

Both on-premises and in the cloud.

---

<!-- .slide: data-background-image="/layout/img/kaas.jpg" -->
# Kubernetes as a Service (KaaS)

* Vanilla Kubernetes
* Full access to clusters

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# On-premises KaaS

Most of the time we run multiple clusters at our customer datacenter as well.

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Why not RBAC, NetworkPolicies etc?

"Soft" multi-tenancy not enough in enterprise context

* Different service classifications
* Different environments: separation of dev, test, prod
* Test tooling on new K8s versions

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->

> People must come to things in their own time, in their own way, for their own reasons, or they never truly come at all. <span>- Dee Hock</span>

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# RBAC, NetworkPolicies FTW

We encourage to use these features and help with integration.

* Small clusters make little sense
* Support while processes need to be adapted
* Kubernetes matures - trust over time

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
## Introducing:

# Giantnetes

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Motivation

Rather obvious. If you provide others with Kubernetes you would like to use the same concepts within your product as well.

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Definition

G8s: Giantnetes

K8s: Kubernetes == Guest cluster

---

![Cluster](/layout/img/cubaneddies.jpg)

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Overview

1. Background / Motivation
2. *Architecture*
3. Implementation details
4. Demo
5. Outlook

---

<!-- .slide:  style="text-align: center;" data-state="invert" -->
![Cluster](/layout/img/diagrams/g8s users.png)

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Networking

* One Flannel server per host
* One Flannel client per host per cluster
* Flannel VXLAN backend

---

<!-- .slide: data-background-image="/layout/img/diagrams/networking/1.png" data-state="invert" data-background-transition="none"-->

---

<!-- .slide: data-background-image="/layout/img/diagrams/networking/2.png" data-state="invert" data-background-transition="none"-->

---

<!-- .slide: data-background-image="/layout/img/diagrams/networking/3.png" data-state="no-logo" data-background-transition="none"-->

---

<!-- .slide: data-background-image="/layout/img/diagrams/networking/4.png" data-state="no-logo" data-background-transition="none"-->

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Certificates

* Each cluster has its own root ca
* Using PKI backend in Vault
* Each service of a cluster has a role in Vault

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Iterations of the platform

1. K8s clusters via systemd units over fleet
1. K8s manifests to create K8s clusters used as templates
1. Writing custom controllers

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Operators

Codify all operational tasks

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Third-Party Resources

Easily extend the Kubernetes API

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# KVM operator

Create k8s clusters on bare-metal via KVM based on a TPR

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# AWS operator

Create k8s clusters on AWS based on a TPR

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# The Cluster TPR defines

* Kubernetes configuration/version
* Ingress configuration/version
* Flannel configuration
* Certificate attributes
* Master/Worker configurations

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Overview

1. Background / Motivation
2. Architecture
3. *Implementation details*
4. Demo
5. Outlook

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# VMs

* Docker container with QEMU tooling
* CoreOS started in a KVM
* Parameterized via CloudConfig
* Certs are handed to the VMs via a volume

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Master

* Etcd runs inside the VMs
* Etcd data is stored on a volume
* Ingress in G8s for the API
* KubeDNS
* Calico Policy Controller

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Worker

* Ingress NGINX Controller running on a specific port on some of the workers
* Loadbalancer checks if the ingress controller is listening and sends traffic to it

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Certificates

Within the VM pods certificates are issued for all services running in the VM

---

<!-- .slide: data-state="invert" data-background-transition="none"-->
![Cluster](/layout/img/diagrams/operators_and_certs/1.png)

---

<!-- .slide: data-state="invert" data-background-transition="none"-->
![Cluster](/layout/img/diagrams/operators_and_certs/2.png)

---

<!-- .slide: data-state="invert" data-background-transition="none"-->
![Cluster](/layout/img/diagrams/operators_and_certs/3.png)

---

<!-- .slide: data-state="invert" data-background-transition="none"-->
![Cluster](/layout/img/diagrams/operators_and_certs/4.png)

---

<!-- .slide: data-state="invert" data-background-transition="none"-->
![Cluster](/layout/img/diagrams/operators_and_certs/5.png)

---

<!-- .slide: data-state="invert" data-background-transition="none"-->
![Cluster](/layout/img/diagrams/operators_and_certs/6.png)

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Overview

1. Background / Motivation
2. Architecture
3. Implementation details
4. *Demo*
5. Outlook

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Overview

1. Background / Motivation
2. Architecture
3. Implementation details
4. Demo
5. *Outlook*

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Micro Operators

* Operators should have single responsibilities.
* Keep them simple and maintainable

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Operatorkit

Our services are based upon microkit. We would like to reduce boilerplate in our operators and collect them in a library called operatorkit.

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Self-hosted

Having Giantnetes and all guest clusters running self-hosted will further ease the lifecycle management of the clusters.

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom right -50%" -->
# Thank you.

Timo Derstappen

@teemow
