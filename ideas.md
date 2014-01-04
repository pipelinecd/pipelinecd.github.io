Site content ideas
==================

The hardest part of applying Continuous Delivery (CD),
is the organizational change required to get it fully applied

In software development Continuous Integration is already
a standard practise, Continuous Delivery and Continuous Deployment
are --technically-- just the final mile

In the Delivery and Deployment phases, activities like
User Acceptance Testing (UAT) and arranging/configuring
the deployment infrastructure are often long running,
and therefore release blocking

Using Pipeline, the whole software workflow from commit
till the consumer can use it, is handled on one place.
Making it seemingly clear what hold-ups the quick and
continuous delivery and deployment flow to the consumer

Hold-ups in the pipeline can then be discussed with the product owner and
stakeholders to be solved

Automation is key. Therefor Pipeline maintains everything
version-controlled. The pipeline workflow, all its external
dependencies, environment configuration, everything

Pipeline hooks into existing tools, as long as the tool has
a command-line interface (CLI) or and API, it can be used
in Pipeline

As the pipeline is user for the whole software workflow,
it has different types of users:

- Developers
  who want deep insight in build and automated test phases

- Testers
  who want to see versions they can pull, test and sign-off after
all automated tests already passed

- The business
  wants to deploy ready versions to the consumer

- And the pipeline maintainer
  wants to maintain the pipeline, experiment and test it
from one single place without interrupting others

Different users with different requirements, therefore different
user interfaces (UI)
