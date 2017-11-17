<!-- .slide: class="centered" -->
# Developing Operators for Kubernetes

by Pawel Kopiczko & Ross Fairbanks

![Giant Swarm](/layout/img/giantswarm.png) <!-- .element: style="width: 100px; margin-right: 50px" -->
![Kubernetes](/layout/img/kubernetes.png) <!-- .element: style="width: 90px; position: relative; top: -10px" -->

---

# Agenda

1. Operators Overview
2. Custom Resource Definition
3. Operator Task
4. Exercise 1. Implement using REST API
5. Exercise 2. Implement using client-go

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Operators Overview

---

# What is an Operator

- An application specific controller that extends the Kubernetes API
- Manages a CRD (Custom Resource Definition) which replace TPRs (Third Party Resources)
- CRD stores state and the operator performs operational tasks
- Pattern first proposed by CoreOS in November 2016

---

# Example Operators

- Etcd
- Prometheus
- Rook

---

# Giant Swarm Operators

- aws-operator
- kvm-operator
- cert-operator

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/diagrams/kvm-operator/1.png) <!-- .element: style="width: 80%;" -->

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/diagrams/kvm-operator/2.png) <!-- .element: style="width: 80%;" -->

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/diagrams/kvm-operator/3.png) <!-- .element: style="width: 80%;" -->

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/diagrams/kvm-operator/4.png) <!-- .element: style="width: 80%;" -->

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Custom Resource Definition

---

# Third Party Resources (Legacy)

- First mechanism for extending Kubernetes
- Added in Kubernetes 1.2
- Deprecated in Kubernetes 1.7
- Removed in Kubernetes 1.8

---

# Custom Resource Definition

- Added in Kubernetes 1.7
- Reimplemented based on lessons learned from TPRs
- Namespace or cluster scoped
- Better pluralization support
- Shortname support
- Finalizers

---

# Example CRD

```yaml
apiVersion: apiextensions.k8s.io/v1beta1
kind: CustomResourceDefinition
metadata:
  name: crontabs.stable.example.com
spec:
  group: stable.example.com
  version: v1
  scope: Namespaced
  names:
    plural: crontabs
    singular: crontab
    kind: CronTab
    shortNames:
    - ct
```

---

# Example Custom Resource

```yaml
apiVersion: "stable.example.com/v1"
kind: CronTab
metadata:
  name: my-cron-object
spec:
  cronSpec: "* * * * */5"
  image: my-cron-image
```

---

# API endpoints

- Core group endpoint (also known as legacy group)

```
/api/v1/pods
```

- Named group endpoint

```
/apis/apps/v1beta1/deployments
```

- CRD endpoint

```
/apis/stable.example.com/v1/crontabs
```

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Custom Resource Definition

---

# Finalizers

- Available in Kubernetes 1.8
- Allow controllers to implement asynchronous pre-delete hooks

```
apiVersion: "stable.example.com/v1"
kind: CronTab
metadata:
  name: my-cron-object
  finalizers:
  - finalizer.stable.example.com
```

---

# Validation

- Alpha in Kubernetes 1.8
- Allows validation of custom objects using OpenAPI V3 schema

---

```
spec:
  validation:
   # openAPIV3Schema is the schema for validating custom objects.
    openAPIV3Schema:
      properties:
        spec:
          properties:
            cronSpec:
            replicas:
              type: integer
              minimum: 1
              maximum: 10
```
