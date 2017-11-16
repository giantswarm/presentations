<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Operator Task

---

<!-- .slide: data-background-image="/layout/img/postgresql-logo.svg" data-background-size="40% 40%" data-background-position="right" -->
# PostgreSQL Operator

---

# Functionality

- Create PostgreSQLConfig CRD
- Create database
- Update database owner
- Delete database

---

# PostgreSQL Server

- Kubernetes resources
  - Secret with admin password
  - Deployment with single PostgreSQL pod
  - Service with a node port
- See [giantswarm/operator-workshop](https://github.com/giantswarm/operator-workshop#create-postgresql-database)

---

# postgresqlops

- [github.com/giantswarm/operator-workshop/postgresqlops](https://github.com/giantswarm/operator-workshop/blob/master/postgresqlops/postgresqlops.go)
- Go package provides database access methods

---

# customobject.Resource

- [customobject](https://github.com/giantswarm/operator-workshop/blob/solution1/customobject/resource.go) Go package applies database changes
- Resource.EnsureCreated
- Resource.EnsureDeleted

---

<!-- .slide:  style="text-align: center;" -->
![Cluster](/layout/img/diagrams/operator_workshop/operator_task.png) <!-- .element: style="width: 80%;" -->
