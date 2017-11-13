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

# API endpoint
# Example Custom Resource

- An endpoint is created for the CRD
```yaml
apiVersion: "stable.example.com/v1"
kind: CronTab
metadata:
  name: my-cron-object
spec:
  cronSpec: "* * * * */5"
  image: my-cron-image
```

```
/apis/containerconf.de/v1/postgresqlconfigs
```

- Similar to the standard endpoints

```
/api/v1/pods
```
