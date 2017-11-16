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
