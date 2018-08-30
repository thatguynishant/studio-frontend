import { filters } from './courseChecklistData';

const getFilteredChecklist = (checklist, props) => {
  let isSelfPaced = props.data.is_self_paced;
  let healthChecks;

  if (isSelfPaced) {
    healthChecks =
      checklist.filter(data => data.pacingTypeFilter === filters.ALL ||
        data.pacingTypeFilter === filters.SELF_PACED);
  } else {
    healthChecks =
      checklist.filter(data => data.pacingTypeFilter === filters.ALL ||
        data.pacingTypeFilter === filters.INSTRUCTOR_PACED);
  }

  healthChecks = checklist.filter(data => data.id !== 'certificate' ||
      props.data.certificates.is_enabled);

  return healthChecks;
};

export default getFilteredChecklist;
