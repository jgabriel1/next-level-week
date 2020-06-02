import Knex from 'knex'

// apply changes
export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary()
        table.string('image').notNullable()
        table.string('title').notNullable()
    })
}

// undo changes
export async function down(knex: Knex) {
    return knex.schema.dropTable('items')
}