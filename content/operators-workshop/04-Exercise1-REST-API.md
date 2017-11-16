<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Exercise 1. Kubernetes REST API

---

# Create CRD

- Connect to Kubernetes API
- Create PostgreSQLConfig CRD via API
- Wait for CRD to be created

---

# Reconciliation loop

- Start reconciliation loop
- List custom objects and reconcile towards their state

---

# Connecting to Kubernetes REST API (Minikube)

- `minikube ip`
- APIServer is on port 8443
- TLS certificates

```bash
~/.minikube/apiserver.crt
~/.minikube/apiserver.key
~/.minikube/ca.crt
```

---

# CRD creation via Kubernetes REST API

- POST /apis/apiextensions.k8s.io/v1beta1/customresourcedefinitions
- Use JSON not YAML

---

# Wait for custom resource creation

- GET /apis/containerconf.de/v1/postgresqlconfigs
- Wait for 200 OK response

---

# Polling custom resources

- GET /apis/containerconf.de/v1/postgresqlconfigs
- Unmarshal postgresqlconfig items
- Hint: Use customobject.PostgreSQLConfig and customobject.Validate

---

```
{

  "apiVersion": "containerconf.de/v1",
  "items": [
    {
      "apiVersion": "containerconf.de/v1",
      "kind": "PostgreSQLConfig",
      "metadata": {
        "name": "example",
        "namespace": "default",
      },
      "spec": {
        "database": "example_db",
        "owner": "containerconf"
      }
    }
  ],
  "kind": "PostgreSQLConfigList",
}
```

---

# Reconcile

- Create database as specified in custom object
- Delete databases without a custom object
- Hint: Use customobject.Resource
