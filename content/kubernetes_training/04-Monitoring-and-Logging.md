# Monitoring and Logging Demo

---

# Prometheus & Grafana for Monitoring

![Grafana Screenshot](/layout/img/grafana_cluster_overview.png)

Note:

Prometheus is a monitoring solution that offers good integration with Kubernetes and Docker.

We combine it with Grafana to offer a more powerful and flexible way to generate visuals and dashboards.

---

# Elastic Stack for Logging

![Kibana Screenshot](/layout/img/kibana.png)

Note:

The Elastic stack is most prominently know in form of the ELK stack. Here we use the more recent combination of Filebeat, Elasticsearch, and Kibana.

This stack helps you get all logs from your containers into a single searchable data store.

With Kibana you get a nice analytics and visualization platform on top.

---

# Twitter Hot URLs Example with Custom Metrics

![THUX Components Overview](/layout/img/thux-overview.png)

Note:

This Microservices example consists of multiple components working hand in hand but decoupled to collect URLs mentioned on Twitter to create a hotlist of popular URLs.

It offers a prometheus compatible metrics endpoint for custom metrics, which could be used to implement auto-scaling of the resolver workers.