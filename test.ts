describe("URL", () => {
  test("URL.parse", () => {
    expect(URL.parse("")).toBeNull();
    expect(URL.parse("https://example.com")?.host).toBe("example.com");
  });

  test("IDNs", () => {
    expect(new URL("https://例子.网站/").href).toBe(
      "https://xn--fsqu00a.xn--5tzm5g/",
    );
  });
});
