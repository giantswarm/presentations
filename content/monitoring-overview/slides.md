<!-- .slide: class="centered" data-background-image="/layout/img/bg/1.png" -->
# Monitoring @ Giant Swarm

![Giant Swarm](/layout/img/giantswarm.png) <!-- .element: style="width: 100px; margin-right: 50px" -->

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

# Overview

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

## Prometheus

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

One Prometheus server per installation

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Sidecar updates Prometheus configuration

Watches cluster CRDs

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

## ELK

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Logs all control plane components

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

# Targets

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Monitor components Giant Swarm is responsible for

e.g: `apiserver`, `kubelet`, `nginx-ingress-controller`

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Or components we can use to improve reliability

e.g: `cadvisor`, `node-exporter`, `kube-state-metrics`

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

and adding new exporters over time

e.g: `net-exporter`

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

# Alerting

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Increasing number of Prometheus alerts

Open source soon

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

For example

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

`APIServerDown`, `AlertManagerNotificationsFailing`, `CertificateAlmostExpired`, `ControllerManagerCPUConsumptionTooHigh`
`EtcdCommitDurationTooHigh`, `IngressControllerDeploymentNotSatisfied`, `JobFailed`
`KubeletDockerOperationsLatencyTooHigh`, `KubeletPLEGLatencyTooHigh`
`MachineEntropyTooLow`, `MachineLoadTooHigh`, `NodeExporterCollectorFailed`,
`NodeIsUnschedulable`, `PersistentVolumeSpaceTooLow`,
`SchedulerMemoryConsumptionTooHigh`, `VaultIsSealed`

---


<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

# Operations

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Engineers oncall 24/7

Using Slack and OpsGenie

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Add new alerts as needed

e.g: postmortem from outage,
new feature being developed

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

# Future

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

One Prometheus server per cluster

Thanos

---

<!-- .slide: class="centered" data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->

Logs for clusters in EFK

Alerting on logs
