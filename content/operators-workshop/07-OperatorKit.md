<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# OperatorKit

- [github.com/giantswarm/operatorkit](https://github.com/giantswarm/operatorkit)

---

# Kubernetes Functionality

- Kubernetes client
- CRD / TPR primitives
  - Create and wait for initialization
  - Generate endpoint URLs

Reduces boilerplate code in our operators

---

# Informer

- Watch virtually any Kubernetes resource
- Decoder for custom resources
- Deterministic, does not despatch events twice after resync

---

# Reconciler Framework

- Resource Interface
- Framework implements the informer AddFunc, DeleteFunc and UpdateFunc
- Standardizes our operators

---

# Resource Interface

- State
  - GetCurrentState
  - GetDesiredState

- Changes
  - NewUpdatePatch
  - NewDeletePatch

---

# Resource Interface 2

- Actions
  - ApplyCreateChange
  - ApplyDeleteChange
  - ApplyUpdateChange

---

# Wrapping Resources

Resource wrappers provides extra functionality

- Logging
- Metrics
- Retries

---

# Future Scope

- Deletion using finalizers
- Custom resource migration to allow CRD schema changes
- Extending reconciler framework

---

<!-- .slide: data-background-image="/layout/img/city_skyline_buildings_2.svg" data-background-size="50% 50%" data-background-position="bottom" -->
# Thank you!

Twitter

- [@giantswarm](https://twitter.com/giantswarm), [@pawelkopiczko](https://twitter.com/pawelkopiczko), [@rossf7](https://twitter.com/rossf7)

GitHub

- [giantswarm/operator-workshop](https://github.com/giantswarm/operator-workshop)
- [giantswarm/operatorkit](https://github.com/giantswarm/operatorkit)

