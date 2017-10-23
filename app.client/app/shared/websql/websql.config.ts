import {
  MixedCordovaSqliteWebsqlConnector,
  NgDbHelperModuleConfig,
  CordovaSqliteConnectorConfiguration
} from 'ng-db-helper';

// Create a function that build the module configuration
export function getDbConfig(): NgDbHelperModuleConfig {
  // This configuration is for CordovaSqliteConnector
  const connectorConfig = new CordovaSqliteConnectorConfiguration();
  connectorConfig.dbName = 'dbStore';
  // you could customize configuration here but you may not need to do that
  // See connectors part to check possibilities ans behaviour
  // create the cordova-sqlite-storage connector, other connectors are
  // Available, see connectors part to find more browser/device support
  const connector = new MixedCordovaSqliteWebsqlConnector(connectorConfig);

  // create the module configuration instance
  const config = new NgDbHelperModuleConfig();

  // Default module connectors are model migration managers too. you
  // can override migration behaviour from connector's configurations
  config.modelMigration = connector;
  config.queryConnector = connector;

  // setup the version of your data model, it will enable migration script
  // to prevent developpement issues due to import optimization, a minor
  // version is automatically incremented. See more configuration part to
  // learn more.
  config.version = '1';

  return config;
}
