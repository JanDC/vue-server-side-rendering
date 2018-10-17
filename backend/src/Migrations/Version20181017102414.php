<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20181017102414 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('ALTER TABLE registered_user ADD COLUMN language VARCHAR(255) DEFAULT "nl" NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('CREATE TEMPORARY TABLE __temp__registered_user AS SELECT id, sex, firstname, lastname, birthday, email FROM registered_user');
        $this->addSql('DROP TABLE registered_user');
        $this->addSql('CREATE TABLE registered_user (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, sex VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, birthday DATE DEFAULT NULL, email VARCHAR(255) NOT NULL)');
        $this->addSql('INSERT INTO registered_user (id, sex, firstname, lastname, birthday, email) SELECT id, sex, firstname, lastname, birthday, email FROM __temp__registered_user');
        $this->addSql('DROP TABLE __temp__registered_user');
    }
}
