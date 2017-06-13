<!-- .slide: class="centered" -->
<!-- .slide: data-background-image="/layout/img/bg/1.png" -->

# Kubernetes in Kubernetes

by Joe Salisbury

![Giant Swarm](/layout/img/giantswarm.png) <!-- .element: style="width: 100px; margin-right: 50px" -->
![Kubernetes](/layout/img/kubernetes.png) <!-- .element: style="width: 90px; position: relative; top: -10px" -->

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Giant Swarm

Infrastructure startup, originally from Cologne

Doing containers since early 2014

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Background

We manage Kubernetes clusters for customers 24/7

Both on-premise and in the cloud

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Kubernetes as a Service

Vanilla Kubernetes

Full access to clusters

Complete separation between clusters

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# On-Premise KaaS

Run multiple clusters at a customer's datacenter

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Cloud KaaS

Run multiple clusters in a customer's AWS account

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
## Introducing: 

# Giantnetes (G8s)

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Motivation

We provide Kubernetes, and would like to use the same concepts within our product as well

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Definition

Giantnetes = G8s = Host cluster

Kubernetes = K8s = Guest cluster

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/g8s users.png)

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Iterations of the platform

* K8s clusters via systemd units with fleet
* K8s clusters via custom operators

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Operators

Codify all operational tasks

"Take the human and turn him into a robot"

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Third-Party Resources

Easily extend the Kubernetes API

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# AWS operator

Create K8s clusters on AWS via EC2 based on a TPR

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Cluster TPR defines

* Kubernetes configuration / version
* Ingress configuration / version
* Certificate attributes
* Master / Worker configurations

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# EC2 instances

* CoreOS started in a EC2 instance
* Parameterized via CloudConfig
* Certs are handed to the EC2 instances, via KMS

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

* etcd runs inside the Master
* Kubernetes API server, and control components
* ELB for the API

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

* kubelet inside Workers
* ELB for Ingress

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Certificates

All intra-component communication uses HTTPS

* Each cluster has its own root CA
* Using PKI backend in Vault
* Each service of a cluster has a role in Vault

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

* Certificates created by cert-operator
* Provided to instances via KMS

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Let's see some things

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Micro Operators 

* Operators should have single responsibilities
* Keep them simple and maintainable

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Operatorkit

A shared library for operators

https://github.com/giantswarm/operatorkit

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Self-Hosted

* G8s / K8s running self-hosted will improve the lifecycle management of the clusters

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Questions?

Joe Salisbury

@salisbury_joe

