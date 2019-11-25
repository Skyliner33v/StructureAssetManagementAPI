const dbConfig = {
  LOCAL: {
    driver: 'msnodesqlv8',
    server: 'localhost\\SQLEXPRESS01',
    connectionString: `Driver={SQL Server Native Client 11.0};Server={localhost\\SQLEXPRESS01};Database={StructureAssetManagement};Trusted_Connection={yes};`
  },
  TEST: {
    driver: 'msnodesqlv8',
    server: 'HQOLYMBRGSQL02T',
    connectionString:
      'Driver={SQL Server Native Client 11.0};Server={HQOLYMBRGSQL02T};Database={StructureAssetManagement};Trusted_Connection={yes};'
  },
  PRODUCTION: {
    driver: 'msnodesqlv8',
    server: 'HQOLYMBRGSQL02P',
    connectionString:
      'Driver={SQL Server Native Client 11.0};Server={HQOLYMBRGSQL02P};Database={StructureAssetManagement};Trusted_Connection={yes};'
  }
}

module.exports = {
  dbConfig
}
