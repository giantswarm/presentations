# Third Party Resources (Legacy)

- First mechanism for extending Kubernetes
- Added in 1.2
- Deprecated in 1.7
- Removed in 1.8

---

# Custom Resource Definition

- Added as beta in 1.7
- Reimplemented based on lessons learned from TPRs
- Namespace or cluster scoped
- Better pluralization support
- Shortname support

---

# Example CRD

```yaml
apiVersion: apiextensions.k8s.io/v1beta1
kind: CustomResourceDefinition
metadata:
  name: postgresqlconfigs.containerconf.de
spec:
  group: containerconf.de
  version: v1
  scope: Namespaced
  names:
    plural: postgresqlconfigs
    singular: postgresqlconfig 
    kind: PostgreSQLConfig
    shortNames: []
```

---

# API endpoint

- An endpoint is created for the CRD

```
/apis/containerconf.de/v1/postgresqlconfigs
```

- Similar to the standard endpoints

```
/api/v1/pods
```
