<!-- .slide: class="centered" data-background-image="/layout/img/bg/1.png" -->
# Deploying Kubernetes Infrastructure to On-Premises Datacenters

by Joe Salisbury

![Giant Swarm](/layout/img/giantswarm.png) <!-- .element: style="width: 100px; margin-right: 50px" -->
![Kubernetes](/layout/img/kubernetes.png) <!-- .element: style="width: 90px; position: relative; top: -10px" -->

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Giant Swarm

Infrastructure startup

Distributed team (24 people, 13 countries)

Doing containers since early 2014

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
Control plane for managing Kubernetes clusters

Operate Kubernetes clusters for our customers 24/7

Cloud and on-prem

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
(Kubernetes is an API for running workloads)

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
Running on Kubernetes, managing Kubernetes

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Control Plane

API services

Operators

Monitoring

---

<!-- .slide: class="centered" data-background-image="/layout/img/bg/5.png" -->
# Kubernetes As A Service

Conscious effort to improve release engineering

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

All services tested and built with CI

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Run our builds and deployments in CircleCI

(AWS)

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Kubernetes makes deploying pretty easy

`kubectl apply`

(if we only did cloud, this would be the last slide)

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Except if your build servers can't reach your data centers

(firewalls, security, 🇨🇳)

#onprem

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

If you can't push to your clusters

Can you pull from them?

---

<!-- .slide: class="centered" data-background-image="/layout/img/bg/6.png" -->
# Pull Based Deployments

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Support continuous deployment to cloud and on-prem

Aim towards 100 installations

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

What do we need to make this work?

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Packages / Registry

Communication channel

Cluster agent

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Helm as package format

Quay as Application Registry (`appr`)

(Application Registry == Docker Registry for charts)

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Create Chart on each commit

Templated with image SHA

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

GitHub API as communication channel

(Deployment API)

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Create GitHub Deployment on merge to master

One Deployment per installation

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

`github.com/giantswarm/draughtsman`

Deployed in the control plane

---

<!-- .slide: class="centered" data-background-color="#FFFFFF" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

![Pipeline](/layout/img/pipeline.png) <!-- .element: style="width: 1000px; position: relative; top: -10px" -->

---

<!-- .slide: class="centered" data-background-color="#FFFFFF" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

![GitHubDeploymentStatus](/layout/img/github-deployment-status.png) <!-- .element: style="width: 1000px;" -->
![SlackDeploymentStatus](/layout/img/slack-deployment.png) <!-- .element: style="width: 1000px;" -->

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Over 25,000 deployments in the last year

70 production deployments per day

#agile

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Scaling

Saving human time

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Improving across the Swarm

---

<!-- .slide: class="centered" data-background-image="/layout/img/bg/3.png" -->
# Notes

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

# GitHub API

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Polling is a great way to eat limits

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

```
curl -i https://api.github.com/user
HTTP/1.1 200 OK
ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"

curl -i https://api.github.com/user -H 'If-None-Match: "644b5..."'
HTTP/1.1 304 Not Modified
ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
```

https://developer.github.com/v3/#conditional-requests

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Getting paged in the shower

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

![GitHubRateLimits](/layout/img/github_rate_limits.jpg_large) <!-- .element: style="width: 900px;" -->

GitHub flags your bot account

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

#unicorns

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

# Testing

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Feature Branch Deployment

Create Deployment with feature branch SHA and test environment

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

E2E

Spin up test cluster, install test versions

---

<!-- .slide: class="centered" data-background-image="/layout/img/bg/4.png" -->
# Future

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

`draughtsman` has some drawbacks

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Managing applications in user clusters

Larger scale

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

`github.com/giantswarm/chart-operator`

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Dynamic clusters

No GitHub API

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Custom Resource for each Chart

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

```
apiVersion: core.giantswarm.io/v1alpha1
kind: ChartConfig
metadata:
  name: example-chart
  namespace: default
spec:
  chart:
    channel: stable
	name: example-chart
    namespace: default
```

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Reconcile installed release against App Registry channel

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Packages / Registry

<strike>Communication channel</strike>

Cluster agent

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

`appr` is an open protocol

No hard dependencies for CI/CD

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Configuration in user clusters instead of CI/CD

(control, information)

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

CI/CD only builds and pushes images and charts

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Planning on transitioning control plane to `chart-operator`

---

<!-- .slide: class="centered" -->
<!-- .slide: data-background-image="/layout/img/bg/7.png" -->
# Questions?

`@salisbury_joe`

(i need followers kthxbai)
