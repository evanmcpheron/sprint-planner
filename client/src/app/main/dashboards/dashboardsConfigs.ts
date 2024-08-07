import { OlorinRouteConfigsType } from '@olorin/utils/OlorinUtils';
import AnalyticsDashboardAppConfig from './analytics/AnalyticsDashboardAppConfig';
import ProjectDashboardAppConfig from './project/ProjectDashboardAppConfig';
import FinanceDashboardAppConfig from './finance/FinanceDashboardAppConfig';
import CryptoDashboardAppConfig from './crypto/CryptoDashboardAppConfig';

/**
 * Dashboards
 */
const dashboardsConfigs: OlorinRouteConfigsType = [
	AnalyticsDashboardAppConfig,
	ProjectDashboardAppConfig,
	FinanceDashboardAppConfig,
	CryptoDashboardAppConfig,
];

export default dashboardsConfigs;
