# Use an official Maven runtime as a parent image
FROM maven:3.8.4-openjdk-17 AS builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the Maven project file
COPY pom.xml .

# Copy the application files
COPY src ./src

# Build the application
RUN mvn package -DskipTests

# Use an official OpenJDK runtime as a parent image
FROM openjdk:17

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the JAR file from the builder stage
COPY --from=builder /usr/src/app/target/adb_back-0.0.1-SNAPSHOT.jar ./app.jar

# Expose the port that the application will run on
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "app.jar"]
