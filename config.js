// Global adapter defaults
module.exports = {

	// Automatically define updatedAt field in schema and refresh with the current timestamp when models are updated
	updatedAt: true,

	// Automatically define createdAt field in schema and populate with the current timestamp during model creation
	createdAt: true,

	// Define a collection to use for app-level transactions
	transactionCollection: {
		adapter: 'dirty',
		identity: '___transaction'
	},

	// ms to wait before warning that a tranaction is taking too long
	transactionWarningTimer: 2000,

	// ms to wait before timing out a transaction and calling unlock() with an error
	// (App can then handle the logic to undo the transaction)
	// TODO: Make this work
	transactionTimeout: 15000,

	// What persistence scheme is being used?  
	// If false, the db will be dropped & recreated each time
	// If true, the db will be persisted to disk
	persistent: true
};