layout: true
class: giantswarm, blue
<div class="header"><img src="../img/giantswarm.png" style="height: 100px;"/></div>
<div class="footer"><span>&copy; CC Attribution-ShareAlike 3.0</span></div>

---

class: center, middle, giantswarm, blue

# Monitoring and Logging Demo

---

# Prometheus & Grafana for Monitoring

.center[.screenshot[![Grafana Screenshot](../img/grafana_cluster_overview.png)]]

???

Prometheus is a monitoring solution that offers good integration with Kubernetes and Docker.

We combine it with Grafana to offer a more powerful and flexible way to generate visuals and dashboards.

---

# Elastic Stack for Logging

.center[.screenshot[![Kibana Screenshot](../img/kibana.png)]]

???

The Elastic stack is most prominently know in form of the ELK stack. Here we use the more recent combination of Filebeat, Elasticsearch, and Kibana.

This stack helps you get all logs from your containers into a single searchable data store.

With Kibana you get a nice analytics and visualization platform on top.

---

# Twitter Hot URLs Example with Custom Metrics

.center[.screenshot[![THUX Components Overview](../img/thux-overview.png)]]

???

This Microservices example consists of multiple components working hand in hand but decoupled to collect URLs mentioned on Twitter to create a hotlist of popular URLs.

It offers a prometheus compatible metrics endpoint for custom metrics, which could be used to implement auto-scaling of the resolver workers.