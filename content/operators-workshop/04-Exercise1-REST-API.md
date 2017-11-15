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

# Connecting to Minikube

- `minikube ip`
- APIServer is on port 8443
- TLS certificates

```bash
~/.minikube/apiserver.crt
~/.minikube/apiserver.key
~/.minikube/ca.crt
```

