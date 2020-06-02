import Knex from 'knex'

// apply changes
export async function up(knex: Knex) {
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary()

        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points')

        table.integer('item_id').notNullable()
            .notNullable()
            .references('id')
            .inTable('items')
    })
}

// undo changes
export async function down(knex: Knex) {
    return knex.schema.dropTable('point_items')
}