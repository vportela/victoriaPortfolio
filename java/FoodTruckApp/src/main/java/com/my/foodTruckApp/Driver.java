package com.my.foodTruckApp;

import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

@Service
public class Driver {

    String url = "jdbc:postgresql://localhost/food_truck";
    String user = "vp";
    String password = "";

    private static final String createTableSQL = "CREATE TABLE test_table_new " +
            "(id INTEGER PRIMARY KEY, " +
            "name TEXT, " +
            "email VARCHAR(50))";

    public static void main(String[] args) throws SQLException {
        Driver createTableSQL = new Driver();
        createTableSQL.createTable();
    }

    public void createTable() throws SQLException {
        System.out.println(createTableSQL);

        try (Connection connection = DriverManager.getConnection(url, user, password);
             Statement statement = connection.createStatement();) {
            statement.execute(createTableSQL);
        } catch (SQLException e) {
            printSQLException(e);
        }
    }

    public static void printSQLException(SQLException ex) {
        for (Throwable e : ex) {
            if (e instanceof SQLException) {
                e.printStackTrace(System.err);
                System.err.println("SQLSTATE: " + ((SQLException) e).getSQLState());
                System.err.println("Error Code: " + ((SQLException) e).getErrorCode());
                System.err.println("Message: " + e.getMessage());
                Throwable t = ex.getCause();
                while (t != null) {
                    System.out.println("Cause: " + t);
                    t = t.getCause();
                }
            }
        }
    }
}


